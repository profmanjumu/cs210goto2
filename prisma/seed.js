const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const assignmentsDirectory = path.join(__dirname, 'assignments');

async function populateAssignments() {
  let files = fs.readdirSync(assignmentsDirectory);
  

  files = files
    .filter(file => path.extname(file).toLowerCase() === '.pdf')
    .sort((a, b) => {
      const aNum = parseInt(a.split('-').pop());
      const bNum = parseInt(b.split('-').pop());
      return aNum - bNum;
    });

  for (const file of files) {
    const filePath = path.join(assignmentsDirectory, file);
    const pdfData = fs.readFileSync(filePath);
    const nameParts = file.split('-');
    nameParts.pop(); 
    const name = nameParts.join(' '); 

    await prisma.assignment.create({
      data: {
        name,
        pdfData,
      },
    });
  }

  console.log('Finished populating assignments.');
}

populateAssignments()
  .catch((e) => {
    console.error('Error populating assignments:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });