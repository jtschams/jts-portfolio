const contactMe = async (contact) => {
  const result = await fetch('/message', {
    method: 'POST',
    body: JSON.stringify(contact),
    headers: { 'Content-Type': 'application/json' }
  })
  return await result.json();
}

export default contactMe;