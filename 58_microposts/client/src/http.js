class EasyHttp {
  async get(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }

  async post(url, body) {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
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
      headers: {
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
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    return data;
  }
}

export const http = new EasyHttp();
