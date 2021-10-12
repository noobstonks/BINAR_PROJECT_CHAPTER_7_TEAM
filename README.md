# BINAR_PROJECT_CHAPTER_7_TEAM
# [FSW] - Chapter 7 Challenge 

### di chapter ini kami mengerjakan project secara tim, tugas kami di chapter ini adalah :

1. Melanjutkan project yang sudah dibuat pada chapte 6 :heavy_check_mark:
2. Menggunakan design pattern MVC pada struktur kode yang besifat monolith :heavy_check_mark:
3. Menggunakan design pattern MCR pada struktur kode yang bersifat JSON REST API 
4. Menggunakan asynchronous pada setipa function :heavy_check_mark:
5. Menyesuaikan tabel database dengan konsep yang diinginkan :heavy_check_mark:
6. Membuat tingakatan 2 tingkatan user yaitu:
    - ***SuperAdmin*** memiliki hak akses ke semua data yang berada pada database. :heavy_check_mark:
    - ***PlayerUser*** memiliki hak akses terbatas sesuai dengan cakupan pada design game 
7. **PlayerUser** menggunakan JWT 
8. Proses buat/create room  :heavy_check_mark:
9. Antara player 1 dengan player lainnya bisa bertanding di satu endpoint room dengan menyediakan endpoint pembuatan room dengan input nama kemudian server akan merespon dengan kode, sehingga 2 user bisa bermain bersama dengan room kode yang sama. :heavy_check_mark: (**saya mengerjakan hingga player 1 masuk, player 2 masuk dilanjutkan oleh anggota tim lain**)
    - Player akan bermain maksimal 3 ronde 
10. Hasil dari setiap pertandingan akan di record ke database user_game_history dan list ditampilkan ke endpooint private yang bisa di akses hanya user.
    - Setelah permainan selesai skor pada game history akan bertambah

***Note:*** *point yang di centang adalah bagian tugas yang saya kerjakan* 

### Menjalankan project:

Syarat untuk bisa menjalan project ini adalah:

#### pastikan di komputer sudah terinstall:
    - git (min v2.25.1 or higher)
    - Node.js (min v14.15.4 or higher)
    - npm (min v7.23.0 or higer)

#### Langkah pertama untuk menjalankan project sbb:

- di terminal copas code berikut:

```bash
# clone repo
$ git clone https://github.com/emrizki/binar-chp7-challenge.git

# masuk ke dalam repo
$ cd binar-chp7-challenge

# hapus origin repo saat ini
$ cd remote remove origin

```
#### kemudian install dependencies menggunakan NPM:

```bash
# install dependencies
$ npm install

# start development server
$ npm run dev
```

*jangan lupa buat file .env sejajar dengan file pacckage.json dan isi file tsb dengan*:
```
SECRET_KEY=mysecret
```

## Authors

- **Anton** - [https://github.com/antonanggoro]
- **Biandi** - [https://github.com/biandi0107]
- **Deandro Farlinno** - [https://github.com/noobstonks]
- **M Rizki** -  [https://github.com/emrizki](https://github.com/emrizki)

## License 📄

This project is licensed under the ISC License 
