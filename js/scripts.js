function calcular(){
   let acaoSocial = document.getElementById("acaoSocial").value // recupera o valor da ação social digitado
   let homenagem = document.getElementById("homenagem").value  //recupera o valor da homenagem digitado 
   let leite = document.getElementById("leite").value  // recupera a qtde de litros de leite  
   let suplemento = document.getElementById("suplemento").value // vamos somar os valores 
   let arroz5kj = document.getElementById("arroz5kj").value
   let arroz1kg = document.getElementById("arroz1kg").value
   let feijao2kg = document.getElementById("feijao2kg").value
   let feijao1kg = document.getElementById("feijao1kg").value
   let macarrao = document.getElementById("macarrao").value
   let oleo = document.getElementById("oleo").value
   
   let kit = Number(document.getElementById("kit").value) //declarar uma variavel sem tipo
   let equipe = document.getElementById("equipe").value
   let pontoskit = 0 //guarda pontuação de kit
   if (equipe == "Laranja"){
      // equipe laranja
      if  (kit >= 97){
         pontoskit = 5000 + ((kit - 97) * 30)
      }
      else if (kit >= 78){
         pontoskit = 4000 + ((kit - 78) * 30)
      }
      else if (kit >= 49){
         pontoskit = 2500 + ((kit - 49) * 30)
      }
      else if (kit >= 19){
         pontoskit = 1000 + ((kit - 19) * 30)
      }
      else  {
         pontoskit = ((kit - 19) * 30)
      }
      if ( kit >= 97 && suplemento){
         pontoskitsuplementos = 5000 + ((kit - 97) * 30) + (suplemento - 49)
      }
     
   }
  
  
  alert(pontoskit)
   let soma = Number(acaoSocial) + Number(homenagem) + ( 2 * Number(leite)) + Number(30 * kit) + Number(15 * suplemento) + Number(5 * arroz5kj) + Number(arroz1kg) + Number(2 * feijao2kg) + Number(feijao1kg) + Number(0,5 * macarrao)+ Number(oleo)
   //devolve o resultado para o HTML
   document.getElementById("soma").innerHTML=soma.toFixed(2)

}