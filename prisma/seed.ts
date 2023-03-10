import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const role_admin = await prisma.role.upsert({
    where: { name: 'admin' },
    update: {},
    create: {
      name: 'admin',
    },
  });
  const role_user = await prisma.role.upsert({
    where: { name: 'user' },
    update: {},
    create: {
      name: 'user',
    },
  });
  const admin = await prisma.user.upsert({
    where: { email: 'admin@ts.occ.co.jp' },
    update: {},
    create: {
      name: 'admin',
      email: 'admin@ts.occ.co.jp',
      password: 'admin',
      roleId: role_admin.id,
    },
  });

  const user = await prisma.user.upsert({
    where: { email: 'user@ts.occ.co.jp' },
    update: {},
    create: {
      name: 'user',
      email: 'user@ts.occ.co.jp',
      password: 'user',
      roleId: role_user.id,
    },
  });
  console.log({ admin, user });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
