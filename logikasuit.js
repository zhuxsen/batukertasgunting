    let deposit = 5000
    let taruh = 0
    function tes(){
    let batu = 'batu'
    let gunting = 'gunting'
    let kertas = 'kertas'
  
    let all = [batu,gunting,kertas,gunting,kertas,batu,kertas,batu,gunting,batu]
    let acak = Math.floor(Math.random() * 10)
    
    let saldo = document.getElementById('saldo')
    let anda = document.getElementById('anda').value
    let hasil = document.getElementById('hasil')
    let lose = document.getElementById('lose')
    let win = document.getElementById('win')
    let taruh = document.getElementById('taruh').value
    let cpu = document.getElementById('cpu').value = all[acak]
    let cs = document.querySelector('.container .input')
    
    cs.style.position = 'absolute'
    cs.style.top = '60px'
    cs.style.transform = 'translateX(-72px)'
    
    if(anda == '' && taruh == ''){
      alert('Wajib di isi')
      cs.style.transform = 'translateX(-5px)'
      cs.style.position = 'absolute'
      cs.style.top = '20px'
    }
    
    if(anda == cpu){
      hasil.textContent = 'DRAW'
    }else if(anda == batu && cpu == kertas){
      deposit = parseInt(deposit)
      deposit-=taruh
      hasil.textContent = 'LOSE'
      saldo.innerText = parseInt(deposit)
    }else if(anda == batu && cpu == gunting){
      hasil.textContent = 'WIN'
      saldo.innerText = parseInt(saldo.innerText) + parseInt(taruh)
    }else if(anda == kertas && cpu == batu){
      let dep = parseInt(deposit)
      let tar = parseInt(taruh)
      hasil.textContent = 'WIN'
      saldo.innerText = parseInt(saldo.innerText) + parseInt(taruh)
    }else if(anda == kertas && cpu == gunting){
      deposit = parseInt(deposit)
      deposit-=taruh
      hasil.textContent = 'LOSE'
      saldo.innerText = deposit
    }else if(anda == gunting && cpu == kertas){
      hasil.textContent = 'WIN'
      saldo.innerHTML = parseInt(saldo.innerHTML) + parseInt(taruh)
    }else if(anda == gunting && cpu == batu){
      deposit-=taruh
      hasil.textContent = 'LOSE'
      saldo.innerText = deposit
    }
     let dok = parseInt(saldo.innerText);
      if(dok >= 10000){
      win.style.display = 'block'
    }
    
    if(dok <= 0){
      lose.style.display = 'block'
    }
    }