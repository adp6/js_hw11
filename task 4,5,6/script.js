window.onload = ()=>{
    let dataContainer = document.querySelector('.session-storage')
    let root = document.querySelector(':root');
    let btnBlue = document.querySelector('#blue');
    let btnWhite = document.querySelector('#white');
    let btnGreen = document.querySelector('#green');
    btnBlue.onclick = ()=>{
        root.style.setProperty('--body-bg', 'blue');
        window.sessionStorage.setItem('bgColor', 'blue')
    }
    btnWhite.onclick = ()=>{
        root.style.setProperty('--body-bg', 'white')
        window.sessionStorage.setItem('bgColor', 'white')
    }
    btnGreen.onclick = ()=>{
        root.style.setProperty('--body-bg', 'green')
        window.sessionStorage.setItem('bgColor', 'green')
    }
    if(window.sessionStorage.bgColor == 'white'){
        root.style.setProperty('--body-bg', 'white');
    }
    else if(window.sessionStorage.bgColor == 'blue'){
        root.style.setProperty('--body-bg', 'blue');
    }
    else if(window.sessionStorage.bgColor== 'green'){
        root.style.setProperty('--body-bg', 'green')
    }

    let pinCode = /^\d{4}$/
    let input = document.querySelector('input');
    input.onchange = ()=>{
        console.log(pinCode.test(input.value))
    }
    
    function linkReturn(link){
        let linkReturn = /https:\W{2,}\w{2,}\.\w{2,}\W/;
        let res = link.match(linkReturn)
        return res[0]
    }
    console.log(linkReturn('https://prog.academy/?page=1'))
}