import React from "react";

function validateLogin(email: string, password: string) {
  const validEmail = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;

  if (!email || !password) {
    alert('Preencha os campos')
    location.reload();
  }

  if (!(password.length >= 8 || password.length <= 16)) {
    alert('Sua senha precisa ser maior que 8 caracteres e menor que 16')
    location.reload();
  }
  

  if (!validEmail.test(email)) {
    alert('E-mail invalido')
    location.reload();
  }

  return true
}

async function validateRegister(completeName: string, email: string, adress: string, number: string, complemento: string, password: string, confirmPassword: string, select: string,) {
  await validateLogin(email, password)

  if (password !== confirmPassword) {
    alert('Senhas não identicas')
    location.reload();
  }

  // não esta funcionando 100% essa validação
  if (!(completeName || adress || number || complemento || confirmPassword || select)) {
    alert('Preencha todos os campos')
    location.reload();
  }
}

 export { 
   validateLogin,
  validateRegister,
 }


 