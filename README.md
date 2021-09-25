# Shelfer

Friendier is web app that is designed to view and search for a set of books and magzines. The app uses the csv-reader API https://github.com/RowenaRavenclawWithExtraClaws/csv-operator. You can start using the app here https://shelfer.vercel.app

## Installation and Running

Just clone the repo and run `npm install` followed by `npm run dev`

## Features

- View books and magzines
- Search for magazines or books using ISBN number or authors email

Note: there is a feature that is not implemented in the app which is to add books and magazines. You can try it locally by cloning the API repo.

## Technologies used

- Next `11.1.2`
- React `17.0.2`
- TypeScript `4.4.3`
- Bootstrap `5.1.1`

## TS types

- Item `{ title: string; isbn: string; authors: string; }`

- TableProps `{ data: Array<Item>; }`
