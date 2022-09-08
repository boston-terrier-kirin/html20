class EasyHttp {
  async get(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }

  async post(url, body) {
    const res = await fetch(url, {
      method: 'POST',
      heaers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return data;
  }

  async put(url, body) {
    const res = await fetch(url, {
      method: 'PUT',
      heaers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return data;
  }

  async delete(url) {
    const res = await fetch(url, {
      method: 'DELETE',
      heaers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    return data;
  }
}
