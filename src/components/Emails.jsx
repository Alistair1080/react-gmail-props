import Email from './Email'

export default function Emails ({filteredEmails, setEmails}) {
   return (
    <main className="emails">
    <ul>
      {filteredEmails.map((email, index) => (
        <Email email={email} index={index} setEmails={setEmails}></Email>
      ))}
    </ul>
    </main>
   )
}