let handler = async (m, { conn }) => {
    conn.tebakkata = conn.tebakkata ? conn.tebakkata : {}
    let id = m.chat
    if (!(id in conn.tebakkata)) throw false
    let json = conn.tebakkata[id][1]
    let ans = json.result.jawaban.trim()
    let clue = ans.replace(/[AIUEOaiueoBDSMbdsm]/g, '_')
    m.reply('```' + clue + '```')
}
handler.command = /^tebak$/i
handler.limit = true
module.exports = handler
