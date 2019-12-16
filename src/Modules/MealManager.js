const baseUrl = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${baseUrl}/meal/${id}`).then(result => result.json())
    },
    getAll() {
        return fetch(`${baseUrl}/meal`).then(result => result.json())
    },
    
    delete(id) {
        return fetch(`${baseUrl}/meals/${id}`, {
          method: "DELETE"
        })
          .then(result => result.json())
      },
     post(makeNewMeal) {
        return fetch(`${baseUrl}/meal`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(makeNewMeal)
        }).then(data => data.json())
      },
      update(editMeal) {
        return fetch(`${baseUrl}/meal/${editMeal.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify( editMeal)
        }).then(data => data.json())
      }

    }