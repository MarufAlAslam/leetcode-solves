function uniqueEmail(emails){
    const firstPart = []
    for(let i = 0 ; i < emails.length ; i++){
        firstPart.push(emails[i].split('@')[0])

        firstPart[i] = firstPart[i].split('+')[0]
        firstPart[i] = firstPart[i].replace(/\./g, '')

        emails[i] = firstPart[i] + '@' + emails[i].split('@')[1]
    }

    // remove duplicates
    emails = [...new Set(emails)].length

    return emails
}

console.log(uniqueEmail(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"]))