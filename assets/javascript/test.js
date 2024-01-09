function test(firstname, lastname, email, birthdate, sex) {
    const socialMale = document.querySelector("#social-male");
    const socialFemale = document.querySelector("#social-female");

    document.querySelector("#firstname").value = firstname;
    document.querySelector("#lastname").value = lastname;
    document.querySelector("#email").value = email;
    document.querySelector("#birthdate").value = birthdate;
    if (sex) 
        socialMale.checked = true;
    else
        socialFemale.checked = true;
}
test("firstname", "lastname", "email", "2002-12-30", true);