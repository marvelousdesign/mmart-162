const csvFilePath = './customer-data.csv'
const csv = require('csvtojson')
const fs = require('fs')
const path = require('path')

const converter = csv({
    flatKeys:true,
    noheader: false,
    headers: ['id','first_name', 'last_name', 'email', 'gender', 'ip_address', 'ssn', 'credit_card', 'bitcoin', 'street_address']
})
.fromFile(csvFilePath)
.on('end_parsed', (jsonObj) => {
    console.log(jsonObj)
    writeJson(jsonObj)
})
.on('error',(err)=>{
    console.log(err)
})

const writeJson = (jsonObj) => {
    fs.writeFileSync(path.join(__dirname, 'customer-data.json'), JSON.stringify(jsonObj))
    console.log('writing csv to json to file!')
}
