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
  
  const read = (params, credentials) => {
    return fetch('/api/form/' + params.formId, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      }
    }).then((response) => {
      return response.json()
    }).catch((err) => console.log(err))
  }
  
  const update = (params, credentials, user) => {
    return fetch('/api/form/' + params.formId, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      },
      body: user
    }).then((response) => {
      return response.json()
    }).catch((err) => {
      console.log(err)
    })
  }
  
  const remove = (params, credentials) => {
    return fetch('/api/form/' + params.formId, {
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
  
  
  export {
    create,
    readAllForm,
    read,
    update,
    remove
  }
  