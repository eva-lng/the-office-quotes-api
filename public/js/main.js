document.addEventListener('DOMContentLoaded', getQuote)
document.getElementById('genQuote').addEventListener('click', getQuote)

async function getQuote() {
    const res = await fetch('/api/random')
    const data = await res.json()

    console.log(data)
    document.getElementById('quote').textContent = `"${data.text}"`
    document.getElementById('char').textContent = `-${data.character}, `
    document.getElementById('episode').textContent = data.episodeName
}