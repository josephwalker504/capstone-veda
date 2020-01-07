const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/stories/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/stories`).then(result => result.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/stories/${id}`, {
      method: "DELETE"
    })
      .then(result => result.json())
  },
  post(makeNewStory) {
    return fetch(`${remoteURL}/stories`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(makeNewStory)
    }).then(data => data.json())
  },
  update(editStory) {
    return fetch(`${remoteURL}/stories/${editStory.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(editStory)
    }).then(data => data.json())
  },
  storyUser(id) {
    return fetch(`${remoteURL}/stories?userId=${id}`).then(result => result.json())
  },
}