function submitData (){
    let name = document.getElementById('input-name').value
    let email = document.getElementById('input-email').value
    let number = document.getElementById('input-number').value
    let subject = document.getElementById('input-subject').value
    let massage = document.getElementById('input-massage').value

    // if (name == ''){
    //     alert('form nama harap di isi yaa....')
    // }
    // if (email == ''){
    //     alert('form email harap di isi yaa....')
    // }
    // if (number == ''){
    //     alert('form phone number harap di isi yaa....')
    // }
    // if (subject == ''){
    //     alert('form subjek harap di isi yaa....')
    // }
    // if (massage == ''){
    //     alert('form massage harap di isi yaa....')
    // }

    if (name==''|| email==''|| number==''||subject==''||massage=='')
        return alert("All input fields must be not empty")

    console.log(name)
    console.log(email)
    console.log(number)
    console.log(subject)
    console.log(massage)

    let emailReciver = 'faza.lanangdjati@gmail.com'
    let a = document.createElement('a')
    a.href = `mailto:${emailReciver}?subject=${subject}&body=Hello my name ${name}, ${subject}, ${massage}`
    a.target = "_blank"
    a.click()

    // let dataObjek = {
    //     name: name,
    //     email: email,
    //     phoneNumber: number,
    //     subject: subject,
    //     massage: massage
    // }

    // console.log (dataObjek)
}




    

