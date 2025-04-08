import { faker } from '@faker-js/faker';

// Generate a professor
function generateFakeProfessor(id, departmentId) {
  return {
    id,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    bio: faker.lorem.paragraph(),
    image: faker.image.avatar(),
    departmentId,
  };
}

// Generate multiple professors for a department
function generateFakeProfessors(count, departmentId) {
  return Array.from({ length: count }, (_, i) =>
    generateFakeProfessor(i + 1, departmentId)
  );
}

// Generate a department with professors
function generateFakeDepartment(id) {
  const departmentName = faker.commerce.department();
  return {
    id,
    name: departmentName,
    description: faker.company.catchPhrase(),
    image: `https://source.unsplash.com/600x300/?${departmentName}`,
    contact: faker.internet.email(),
    professors: generateFakeProfessors(3, id),
  };
}

// Generate multiple departments
export function generateFakeDepartments(count = 8) {
  return Array.from({ length: count }, (_, i) => generateFakeDepartment(i + 1));
}
