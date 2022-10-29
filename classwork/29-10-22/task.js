employee=[{   
    emp_id:"hammad",
    emp_name :20,
    emp_company :"physics",
    emp_company_address:
    {
        com_city :"rwp",
        com_country: "pak"
    },  
    emp_address:{
        emp_city :"isb",
        emp_country :"pak"
    },
    emp_sal :"50000",
    islam : 0
},
{   
    emp_id:"zohaib",
    emp_name :20,
    emp_company :"physics",
    emp_company_address:
    {
        com_city :"rwp",
        com_country: "pak"
    },  
    emp_address:{
        emp_city :"isb",
        emp_country :"pak"
    },
    emp_sal :"60000",
    islam : 1
},
{   
    emp_id:"hamza",
    emp_name :20,
    emp_company :"physics",
    emp_company_address:
    {
        com_city :"rwp",
        com_country: "pak"
    },  
    emp_address:{
        emp_city :"isb",
        emp_country :"pak"
    },
    emp_sal :"30000",
    islam : 0
},
{   
    emp_id:"zeesahn",
    emp_name :20,
    emp_company :"physics",
    emp_company_address:
    {
        com_city :"rwp",
        com_country: "pak"
    },  
    emp_address:{
        emp_city :"isb",
        emp_country :"pak"
    },
    emp_sal :"90000",
    islam : 1
},
{   
    emp_id:"furqan",
    emp_name :20,
    emp_company :"physics",
    emp_company_address:
    {
        com_city :"rwp",
        com_country: "pak"
    },  
    emp_address:{
        emp_city :"isb",
        emp_country :"pak"
    },
    emp_sal :"40000",
    islam : 1
},{   
    emp_id:"moiz",
    emp_name :20,
    emp_company :"physics",
    emp_company_address:
    {
        com_city :"rwp",
        com_country: "pak"
    },  
    emp_address:{
        emp_city :"isb",
        emp_country :"pak"
    },
    emp_sal :"80000",islam : 0
},
{   
    emp_id:"awais",
    emp_name :20,
    emp_company :"physics",
    emp_company_address:
    {
        com_city :"rwp",
        com_country: "pak"
    },  
    emp_address:{
        emp_city :"isb",
        emp_country :"pak"
    },
    emp_sal :"70000",
    islam : 0
},
{   
    emp_id:"raza",
    emp_name :20,
    emp_company :"physics",
    emp_company_address:
    {
        com_city :"rwp",
        com_country: "pak"
    },  
    emp_address:{
        emp_city :"isb",
        emp_country :"pak"
    },
    emp_sal :"10000",
    islam : 1
},
{   
    emp_id:"ahmar",
    emp_name :20,
    emp_company :"physics",
    emp_company_address:
    {
        com_city :"rwp",
        com_country: "pak"
    },  
    emp_address:{
        emp_city :"isb",
        emp_country :"pak"
    },
    emp_sal :"25000",
    islam : 0
}
]

//console.log(employee.emp_company_address.com_city)
//.log(employee.emp_address.emp_city)

//let a=employee.filter((ele)=>(ele.emp_sal<=40000))
//console.log(a);
let empobj ={ }

employee.forEach(element => {
    if(element.emp_id=='hammad'){
    return empobj= element;}
    else{ 
    return false}
});

console.log(empobj)