// CREATE AN ARRAY OF EMPLOYEES

let employeesArray = JSON.parse(localStorage.getItem('employees')) || [];

let idEmployee  = document.querySelector('#id').value
let fullName    = document.querySelector('#name').value
let digExt      = document.querySelector('#extension').value
let email       = document.querySelector('#email').value
let department  = document.querySelector('#department').value
let subEmpForm  = document.querySelector('#addForm').value
let empForm     = document.getElementById('addForm');
let empTable    = document.getElementById('employees');

const addEmployee = (idEmployee, fullName , digExt , email, department) => {
    employeesArray.push({
        idEmployee: idEmployee,
        fullName: fullName,
        digExt: digExt,
        email: email,
        department: department
    });
    localStorage.setItem('employees', JSON.stringify(employeesArray));

    return {idEmployee, fullName , digExt , email, department}
}

const createEmployeeElement = ({idEmployee, fullName , digExt , email, department}) => {

    const  cell_idEmployee = document.createElement('th');
    const  cell_fullName   = document.createElement('th');
    const  cell_digExt     = document.createElement('th');
    const  cell_email      = document.createElement('th');
    const  cell_department = document.createElement('th');
    // const  cell_deleteBtn  = document.createElement('th');


    cell_idEmployee.innerText   =idEmployee;
    cell_fullName.innerText     =fullName;
    cell_digExt.innerText       =digExt;
    cell_email.innerText        =email;
    cell_department.innerText   =department;
    // cell_deleteBtn.innerText    =deleteBtn;

    table.append(cell_idEmployee, cell_fullName, cell_digExt, cell_email, cell_department);
}

employeesArray.forEach(createEmployeeElement);




// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY


if(localStorage.getItem(employeesArray) !== null) {
    employeesArray.push(employeesArray.value);
}





// GET DOM ELEMENTS
const $ = (id) => {
    return document.getElementById(id);
};

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION

    e.preventDefault();

    // const newEmployee = addEmployee(
    //     idEmployee.value,
    //     fullName.value,
    //     digExt.value,
    //     email.value,
    //     department.value
    // );
    // createEmployeeElement(newEmployee)

    // idEmployee.value = ""
    // fullName.value   = ""
    // digExt.value     = ""
    // email.value      = ""
    // department.value = ""



    // GET THE VALUES FROM THE TEXT BOXES

  
    let idEmployee  = document.querySelector('#id').value
    let fullName    = document.querySelector('#name').value
    let digExt      = document.querySelector('#extension').value
    let email       = document.querySelector('#email').value
    let department  = document.querySelector('#department').value
    let subEmpForm  = document.querySelector('#addForm').value

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT


    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY

    // BUILD THE GRID

    // RESET THE FORM
    addForm.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    addForm.id.focus();
});



// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE

        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)

        // CALL DELETEROW() METHOD TO DELETE SPECIFIC ROW IN THE TABLE

        // REMOVE EMPLOYEE FROM ARRAY

        // BUILD THE GRID

});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION

    // REBUILD THE TBODY FROM SCRATCH

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

    document.getElementById('body').appendChild(table);

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE


    // BIND THE TBODY TO THE EMPLOYEE TABLE

    // UPDATE EMPLOYEE COUNT

    // STORE THE ARRAY IN STORAGE

};