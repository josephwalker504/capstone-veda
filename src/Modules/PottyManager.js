const baseUrl = "http://localhost:5002"

export default {
    get(id) {
      return fetch(`${baseUrl}/pottys/${id}`).then(result => result.json())
    },
    getAll() {
        return fetch(`${baseUrl}/pottys`).then(result => result.json())
    },
    
    delete(id) {
        return fetch(`${baseUrl}/pottys/${id}`, {
          method: "DELETE"
        })
          .then(result => result.json())
      },
     post(NewPotty) {
        return fetch(`${baseUrl}/pottys`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(NewPotty)
        }).then(data => data.json())
      },
      update(editPotty) {
        return fetch(`${baseUrl}/pottys/${editPotty.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(editPotty)
        }).then(data => data.json())
      }

    }