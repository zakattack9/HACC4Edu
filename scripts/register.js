let inputForms = $(".input75");
let numberForms = $(".input25")

let formInfo = []

let finishForm = () => {
  formInfo.push(
    {
      "firstName" : "" + inputForms[0].value,
      "lastName" : "" + inputForms[1].value,
      "emailAddress" : "" + inputForms[2].value,
      "phoneNumber" : "" + numberForms[4].value + "-" + numberForms[5].value + "-" + numberForms[6].value,
      "Organization" : "" + inputForms[3].value
    }
  )
  console.log(formInfo);
}
