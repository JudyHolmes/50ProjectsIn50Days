const jokeList = [
    '有次牙痛去看医生，医生说我的牙有点磨损，问我晚上睡觉磨不磨牙？我说不知道啊，睡着了怎么能知道自己是不是磨牙呢？医生说：哦，单身啊！',
    '那天，我走在街上，看到一辆车停在两堵墙之间。前后杠距离墙很窄。这得多高的倒车技术才能倒进去啊！一个哥们过来站在车旁边。我：“你停的车？高手啊！”他：“车是我昨天停这的！奇怪，我停车后谁在这起的墙！”',
    '一女友人给神进香，插第一根香时香断了，她心里一阵惊恐感到不吉利。插第二根香时香也断了，她急忙跪下来祈求神的保佑。当插第三根香时香又断了，她愤怒地将香揉碎扔地上说：这是什么破香，质量太差了！',
    '“你说，这条男式内裤是谁的？”面对丈夫的质问，朝阳区的王女士镇定自若，她嗑了一粒瓜子，不急不忙地把壳儿轻放在纸巾上，说：“谁知道呢，这几天风那么大。”',
    '刚刚老婆吃了一碗酱油拌饭，她说小时候也这样吃，觉得特别满足，但现在没有以前那种满足感了。我：“那是饿的轻！”老婆：“你懂个屁，是不够吃！”说完她就又吃了一碗。',
    '一只黄雀在厚厚厚地憨笑，老鹰问：“你笑什么呢？”黄雀说：“嘘，你看，前面有只螳螂在捕蝉。”']

const jokeEle = document.querySelector('.joke')
const jokeBtn = document.querySelector('.btn')

function getRandomNum(n, m) {
    let num = Math.floor(Math.random() * (m - n)) + n
    return num
}

function showJoke() {
    let randomNum = getRandomNum(0,6)
    jokeEle.innerText = jokeList[randomNum]
}
showJoke()

jokeBtn.addEventListener('click', showJoke)

// 借助icanhazdadjoke
/* async function showJoke() {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    }
  
    const res = await fetch('https://icanhazdadjoke.com', config)
  
    const data = await res.json()
  
    jokeEle.innerHTML = data.joke
} */