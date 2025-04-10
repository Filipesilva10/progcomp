function calcular() {
   // recupera o valor da ação social digitado
   // declaração variavel sem tipo
   let acaoSocial = document.getElementById("acaoSocial").value
   // recupera o valor da homenagem digitado
   let homenagem = document.getElementById("homenagem").value
   // recupera a qtde de litros de leite
   let leite = document.getElementById("leite").value
   // recupera a qtde de kits
   let kit = Number(document.getElementById("kit").value)
   // recupera a qtde de suplementos
   let suplemento = Number(document.getElementById("suplemento").value)
   // recupera a cor da equipe
   let equipe = document.getElementById("equipe").value
   // recupera a qtde pacote 5kg arroz
   let arroz5avulso = document.getElementById("arroz5avulso").value
   // recupera a qtde pacote 1kg arroz
   let arroz1avulso = document.getElementById("arroz1avulso").value
   // recupera a qtde pacote 2kg feijão
   let feijao2avulso = document.getElementById("feijao2avulso").value
   // recupera a qtde pacote 1kg feijão
   let feijao1avulso = document.getElementById("feijao1avulso").value
   // recupera a qtde pacote macarrão
   let macarrao = document.getElementById("macarrao").value
   // recupera a qtde oleo
   let oleo = document.getElementById("oleo").value
   // recupera a qtde de doações
   let doacaodesangue = Number(document.getElementById("doacaodesangue").value)
   // recupera a qtde audio visual
   let audiovisual = document.getElementById("audiovisual").value

   let pontosKitSupl = 0 // guarda pontuacao de kit
   if (equipe == "Laranja") {
       // equipe é laranja
       if (Number(kit) >= 97 && suplemento >= 49) {
           pontosKitSupl = 5000 + ((kit - 97) * 30 + (suplemento - 49) * 15)
       }
       else if (Number(kit) >= 78 && suplemento >= 39) {
           pontosKitSupl = 4000 + ((kit - 78) * 30 + (suplemento - 39) * 15)
       }
       else if (kit >= 49 && suplemento >= 25) {
           pontosKitSupl = 2500 + ((kit - 49) * 30 + (suplemento - 25) * 15)
       }
       else if (kit >= 19 && suplemento >= 10) {
           pontosKitSupl = 1000 + ((kit - 19) * 30 + (suplemento - 10) * 15)
       }

   }
   else if (equipe == "Preta") {
       // equipe é Preta
       if (Number(kit) >= 103 && suplemento >= 52) {
           pontosKitSupl = 5000 + ((kit - 103) * 30 + (suplemento - 52) * 15)
       }
       else if (Number(kit) >= 82 && suplemento >= 42) {
           pontosKitSupl = 4000 + ((kit - 82) * 30 + (suplemento - 42) * 15)
       }
       else if (kit >= 52 && suplemento >= 26) {
           pontosKitSupl = 2500 + ((kit - 52) * 30 + (suplemento - 26) * 15)
       }
       else if (kit >= 21 && suplemento >= 10) {
           pontosKitSupl = 1000 + ((kit - 21) * 30 + (suplemento - 10) * 15)
       }

   }
   else if (equipe == "Roxa") {
       // equipe é Roxa
       if (Number(kit) >= 102 && suplemento >= 51) {
           pontosKitSupl = 5000 + ((kit - 102) * 30 + (suplemento - 51) * 15)
       }
       else if (Number(kit) >= 82 && suplemento >= 41) {
           pontosKitSupl = 4000 + ((kit - 82) * 30 + (suplemento - 41) * 15)
       }
       else if (kit >= 51 && suplemento >= 26) {
           pontosKitSupl = 2500 + ((kit - 51) * 30 + (suplemento - 26) * 15)
       }
       else if (kit >= 20 && suplemento >= 10) {
           pontosKitSupl = 1000 + ((kit - 20) * 30 + (suplemento - 10) * 15)
       }

   }
   else if (equipe == "Verde") {
       // equipe é verde
       if (Number(kit) >= 88 && suplemento >= 44) {
           pontosKitSupl = 5000 + ((kit - 88) * 30 + (suplemento - 44) * 15)
       }
       else if (Number(kit) >= 70 && suplemento >= 35) {
           pontosKitSupl = 4000 + ((kit - 70) * 30 + (suplemento - 35) * 15)
       }
       else if (kit >= 44 && suplemento >= 22) {
           pontosKitSupl = 2500 + ((kit - 44) * 30 + (suplemento - 22) * 15)
       }
       else if (kit >= 18 && suplemento >= 9) {
           pontosKitSupl = 1000 + ((kit - 18) * 30 + (suplemento - 9) * 15)
       }

   }
   else if (equipe == "Vermelha") {
       // equipe é verde
       if (Number(kit) >= 93 && suplemento >= 47) {
           pontosKitSupl = 5000 + ((kit - 93) * 30 + (suplemento - 47) * 15)
       }
       else if (Number(kit) >= 74 && suplemento >= 38) {
           pontosKitSupl = 4000 + ((kit - 74) * 30 + (suplemento - 38) * 15)
       }
       else if (kit >= 47 && suplemento >= 24) {
           pontosKitSupl = 2500 + ((kit - 47) * 30 + (suplemento - 24) * 15)
       }
       else if (kit >= 19 && suplemento >= 9) {
           pontosKitSupl = 1000 + ((kit - 19) * 30 + (suplemento - 9) * 15)
       }

   }

   let pontosdoacaosangue = 0 //guarda pontuação doação do sangue
   if (equipe == "Laranja") {
       if (doacaodesangue >= 49) {
           pontosdoacaosangue = 2500 + ((doacaodesangue - 49) * 20)
       } else if (doacaodesangue < 49) {
           pontosdoacaosangue += (doacaodesangue * 20)
       }
   }

   else if (equipe == "Preta") {
       if (doacaodesangue >= 52) {
           pontosdoacaosangue = 2500 + ((doacaodesangue - 52) * 20)
       } else if (doacaodesangue < 52) {
           pontosdoacaosangue += (doacaodesangue * 20)
       }
   }


   else if (equipe == "Roxa") {
       if (doacaodesangue >= 51) {
           pontosdoacaosangue = 2500 + ((doacaodesangue - 51) * 20)
       } else if (doacaodesangue < 51) {
           pontosdoacaosangue += (doacaodesangue * 20)
       }
   }

   else if (equipe == "Verde") {
       if (doacaodesangue >= 44) {
           pontosdoacaosangue = 2500 + ((doacaodesangue - 44) * 20)
       } else if (doacaodesangue < 44) {
           pontosdoacaosangue += (doacaodesangue * 20)
       }
   }


   else if (equipe == "Vermelha") {
       if (doacaodesangue >= 47) {
           pontosdoacaosangue = 2500 + ((doacaodesangue - 47) * 20)
       } else if (doacaodesangue < 47) {
           pontosdoacaosangue += (doacaodesangue * 20)
       }
   }


   let soma = Number(acaoSocial) + Number(homenagem) + (2 * Number(leite)) + pontosKitSupl + pontosdoacaosangue + Number(audiovisual) + Number(5 * arroz5avulso) + Number(arroz1avulso) + Number(2 * feijao2avulso) + Number(feijao1avulso) + Number(0, 5 * macarrao) + Number(oleo)
   // devolve o resultado para o HTML
   document.getElementById("soma").innerHTML = soma.toFixed(2)
}