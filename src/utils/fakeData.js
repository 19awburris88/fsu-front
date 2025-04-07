import { faker } from '@faker-js/faker';

// Generate one department with faculty
export function generateFakeDepartment(id) {
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
export function generateFakeDepartments(count = 5) {
  return Array.from({ length: count }, (_, i) => generateFakeDepartment(i + 1));
}

// Generate a professor
export function generateFakeProfessor(id, departmentId = null) {
  return {
    id,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    bio: faker.lorem.paragraph(),
    image: faker.image.avatar(),
    departmentId,
  };
}

// Generate multiple professors
export function generateFakeProfessors(count = 10, departmentId = null) {
  return Array.from({ length: count }, (_, i) =>
    generateFakeProfessor(i + 1, departmentId)
  );
}
