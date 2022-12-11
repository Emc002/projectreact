import axios from "axios";


export const postBook = async (e) => {
  try {
    e.preventDefault()
    const res = await axios.post('http://localhost:3004/books', {

      title: e.target[0].value,
      author: e.target[1].value,
      cover: e.target[2].value,
      genre: e.target[3].value,
      desc: e.target[4].value,
      authorId: e.target[5].value,
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

export const postAuthor = async (e) => {
  try {
    e.preventDefault()
    const res = await axios.post('http://localhost:3004/author', {
      label: e.target[0].value,
      biografi: e.target[1].value,
      value: e.target[0].value
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

export const patchBook = async (e, data) => {
  e.preventDefault();
  const body = {};
  for (let i = 0; i < e.target.length - 1; i++) {
    if (e.target[i].value) {
      body[e.target[i].name] = e.target[i].value;
    }
  }

  try {
    const res = await axios.patch("http://localhost:3004/books/" + data, {
      ...body,
    });
  } catch (err) {
    console.log(err);
  }
};

export const patchAuthor = async (e, data) => {
  e.preventDefault();

  const body = {};
  for (let i = 0; i < e.target.length - 1; i++) {
    if (e.target[i].value) {
      body[e.target[i].name] = e.target[i].value;
    }
  }

  try {
    const res = await axios.patch("http://localhost:3004/author/" + data, {
      ...body,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteBook = async (id) => {
  try {
    const response = await axios.delete("http://localhost:3004/books/" + id);
    console.log(response);
  } catch (error) {
    console.log(error);
  }

};

export const deleteAuthor = async (id) => {
  try {
    const response = await axios.delete("http://localhost:3004/author/" + id);
    console.log(response);
  } catch (error) {
    console.log(error);
  }

};

