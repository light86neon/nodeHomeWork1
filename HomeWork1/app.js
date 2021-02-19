const fs = require('fs');
const path = require('path');

const boys2000 = path.join(__dirname,'dir','boys2000');
const girls1800 = path.join(__dirname,'dir','girls1800');

fs.readdir(boys2000, (err,files)=>{
    if(err){
        console.log(err)
        return
    }

    for(const file of files) {
        fs.readFile(path.join(boys2000,file),(err1,data) =>{
            if(JSON.parse(data).gender === 'female'){
                fs.rename(path.join(boys2000, file), path.join(girls1800,file),(err2)=>{
                    if(err2){
                        console.log(err2);
                        return;
                    }
                })
            }
        })
    }
})

fs.readdir(girls1800, (err,files)=>{
    if(err){
        console.log(err)
        return
    }

    for(const file of files) {
        fs.readFile(path.join(girls1800,file),(err1,data) =>{
            if(JSON.parse(data).gender === 'male'){
                fs.rename(path.join(girls1800, file), path.join(boys2000,file),(err2)=>{
                    if(err2){
                        console.log(err2);
                        return;
                    }
                })
            }
        })
    }
})
