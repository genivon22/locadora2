function valida(){
    let usuario = document.getElementById("usuario");
    let senha = document.getElementById("password");
    if(usuario.value == "" || senha.value == ""){
        alert ("Campo Usuário ou Senha não informado!")
    }
    else{
        sessionStorage.setItem('acesso',usuario.value);
        alert('Bem vindo ' + usuario.value)
        window.location.replace ("pagina2.html")
       // window.Location.replace ("http://www.google.com.br") 
    
    }
}




function teste(){
    
    let preco = 12.00;
    let arr = [];
    let posicao = 0;
    let soma=0;

  
   while(posicao <=2){
          
        arr[posicao] = document.getElementById("qtd"+posicao).value*preco;
        //console.log(arr[posicao]); 
               posicao +=1;
                  
           }
    for(let i = 0; i < arr.length; i++){
    soma += arr[i];
    console.log(soma);
    }
    document.getElementById('totalgeral').value ="R$ "+ soma+",00";   
}









arr.forEach((arrs) => {
    console.log(valoresInfoInputs);
})


















//     // valor = [].map.call(valor,function(valoresInput){
//     console.log(valor)
//     arr.push(valor);




    //console.log(arr[0]);
    
    // }
    //);  
    // arr.forEach((valoresInfoInputs) =>{
    //     console.log(valoresInfoInputs*12);
    

        // for(let i = 0; i < arr.length; i++){
        //     soma += arr[i];
        //     console.log(soma);
        //     }
        //     document.getElementById('totalgeral').value = soma;
       
    //};

    // for(let i = 0; i < arr.length; i++){
    // soma += arr[i];
    // console.log(arr[1]);
    // }
    // dlet valor =  document.getElementsByClassName('.qtd');

    // for(var i = 0; i < item.length; i++){
    // arr.push(i);
    // console.log(arr);




// var item = document.querySelectorAll('qtd');
//     var arr = [];
//     var soma = 0;
// function calcular(){   
//     for(var i = 0; i < item.length; i++){
//     arr.push(i);
//     console.log(arr);
// }
    
    //array.forEach((quantidade) => {
     //   console.log(quantidade*12)
   // }
    

    // for(var i = 0; i < total.length; i++){
    // soma +=total[i]
    // }
   





    // posicao = 0
    // let valor = [];
    // while(posicao<=3){
    //     valor = document.querySelector('qtd').value*12;
    //     posicao++;
    // }
    // let teste = document.getElementById('totalgeral').value=valor[posicao]
    // console.log(teste);









