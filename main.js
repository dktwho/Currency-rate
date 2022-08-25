async function getCurrencies() {
  const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js') 
  const data = await response.json()
  console.log(data)


 const usdRate = data.Valute.USD.Value.toFixed(2)
 const eurRate = data.Valute.EUR.Value.toFixed(2) 

 // 2. Отбразить на Странице

 const usdElement = document.querySelector('#usd')
 const eurElement = document.querySelector('#eur')

 usdElement.innerText = usdRate
 eurElement.innerText = eurRate
}

getCurrencies()
