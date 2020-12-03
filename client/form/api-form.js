const create = (form) => {
    return fetch('/api/form/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })
      .then((response) => {
        return response.json()
      }).catch((err) => console.log(err))
  }
  
  const readAllForm = async (signal) => {
    try {
		let response = await fetch('/api/form', {
			method: 'GET',
			signal: signal,
		});
		return await response.json();
	} catch (err) {
		console.log(err);
	}
  }
  
  const read = async (params, credentials, signal) => {
    try {
      let response = await fetch('/api/form/' + params.formId, {
        method: 'GET',
        signal: signal,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + credentials.t
        }
      })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }
  
  const update = (params, credentials, user) => {
    return fetch('/api/form/' + formId, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      },
      body: form
    }).then((response) => {
      return response.json()
    }).catch((err) => {
      console.log(err)
    })
  }
  
  const remove = (params, credentials) => {
    return fetch('/api/form/' + formId, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      }
    }).then((response) => {
      return response.json()
    }).catch((err) => console.log(err))
  }

  const readTotalUser = async (signal) => {
    try {
		let response = await fetch('/api/form/totalusers', {
			method: 'GET',
			signal: signal,
		});
		return await response.json();
	} catch (err) {
		console.log(err);
	}
  }

  const readLastUser = async (signal) => {
    try {
		let response = await fetch('/api/form/singleuser', {
			method: 'GET',
			signal: signal,
		});
		return await response.json();
	} catch (err) {
		console.log(err);
	}
  }
  
  
  export {
    create,
    readAllForm,
    read,
    update,
    remove,
    readTotalUser,
    readLastUser
  }
  