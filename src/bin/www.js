const app = require('../index')

app.listen(process.env.PORT || app.get('port'), () => {
  console.log(`Server is running on port ${app.get('port')}`)
})