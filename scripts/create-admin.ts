// DO NOT COMMIT THIS FILE TO VERSION CONTROL!
// This script creates an admin user for your production database.
// Delete this file after use or add it to .gitignore.

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const email = "admin@example.com"; // Change this
  const password = "YourStrongPassword!"; // Change this

  // Ensure the admin role exists
  let role = await prisma.role.findUnique({ where: { name: "admin" } });
  if (!role) {
    role = await prisma.role.create({ data: { name: "admin", description: "Administrator" } });
  }

  // Hash the password
  const hashed = await bcrypt.hash(password, 12);

  // Create the admin user
  await prisma.user.create({
    data: {
      name: "Admin",
      email,
      password: hashed,
      roleId: role.id,
    },
  });

  console.log("Admin user created:", email);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
