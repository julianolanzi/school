

module.exports = {
    age: function (timestamp) {
        const today = new Date()
        const birthDate = new Date(timestamp)

        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()

        if (month < 0 || month == 0 && today.getDate() < birthDate.getDate()) {
            age = age - 1
        }
        return age
    },

    date: function (timestamp) {
        const date = new Date(timestamp)

        // yyyyy
        const year = date.getUTCFullYear()

        // mm
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)

        // dd

        const day = `0${date.getUTCDate()}`.slice(-2)

        return `${year}-${month}-${day}`

    },

    graduation: function (value){
        
        let degree;

        if(value==='highschool') {
            degree = "Complete high school";
            
        }
        
        if(value==="highereducation") {
            degree = "Complete Higher Education";
            
        }
        
        if(value==="master") {
            degree = "Master";
        }
        
        
        if(value==="Doctorate") {
            degree = "Doctorate degree";
            
        }
        
        return (degree)

    
    },

}