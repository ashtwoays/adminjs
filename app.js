import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import express from 'express'

// ORM Import
import * as AdminJSSequelize from '@adminjs/sequelize'
import bcaToken from './databases/entity/bcaToken.entitiy.js';
AdminJS.registerAdapter({
  Resource : AdminJSSequelize.Resource,
  Database : AdminJSSequelize.Database
})

// Default PORT
const PORT = 3000

const start = async () => {
  const app = express()

  // Add Entity model for sidebar
  const admin = new AdminJS({
    resources: [bcaToken]
  })

  const adminRouter = AdminJSExpress.buildRouter(admin)
  app.use(admin.options.rootPath, adminRouter)

  app.listen(PORT, () => {
    console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`)
  })
}
start()