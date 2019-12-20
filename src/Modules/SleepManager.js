const baseUrl = "http://localhost:5002"

export default {
    get(id) {
      return fetch(`${baseUrl}/sleeps/${id}`).then(result => result.json())
    },
    getAll() {
        return fetch(`${baseUrl}/sleeps`).then(result => result.json())
    },
    
    delete(id) {
        return fetch(`${baseUrl}/sleeps/${id}`, {
          method: "DELETE"
        })
          .then(result => result.json())
      },
     post(NewSleep) {
        return fetch(`${baseUrl}/sleeps`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(NewSleep)
        }).then(data => data.json())
      },
      update(editSleep) {
        return fetch(`${baseUrl}/sleeps/${editSleep.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(editSleep)
        }).then(data => data.json())
      }

    }