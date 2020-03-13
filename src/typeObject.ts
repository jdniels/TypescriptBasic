// Object

let user = {
  name: "Juan Daniel",
  age: 20
};

/*
    Imutable sob, jadi gk bisa mutasi Langsung, 
user = {
    address: "123 Main St"
}
*/

/*
    kalau mau Ubah Langsung kek dibawah, Harus menyertakan semua Objectnya, gk boleh cuma

    user = {
        name : "Nopalina Ayu Munthe"
    }

    ^ Error, karna "Age" harus di Bawa
*/
user = {
  name: " Nopalina Ayu Munthe",
  age: 18
};

/* 
    ada yang lebih preference, pake type
*/

type User = {
  name: string;
  age: number;
};

// makenya ->

let biodata: User = {
  name: "Juan Daniel",
  age: 20
};
