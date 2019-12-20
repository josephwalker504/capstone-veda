const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/children/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/children`).then(result => result.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/children/${id}`, {
      method: "DELETE"
    })
      .then(result => result.json())
  },
  post(makeChild) {
    return fetch(`${remoteURL}/children`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(makeChild)
    }).then(data => data.json())
  },

  update(editChild) {
    return fetch(`${remoteURL}/children/${editChild.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(editChild)
    }).then(data => data.json())
  },
  childUser(id) {
    return fetch(`${remoteURL}/children?userId=${id}`).then(result => result.json())
  }
}