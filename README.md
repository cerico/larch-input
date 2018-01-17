# Larch Input


![screenshot](https://s3.eu-west-2.amazonaws.com/io1937/screenshots/larch.jpeg)


## TLDR / What is it?

Styled input

## How Do I use it?

### Install

```
➜  yesmate git:(dev) npm i larch-input
```

### Import

Import into your main react component

```
import Input from 'larch-input';
```

### Include

Include in your react component and pass it the colours you want for it

```
render (){
    const scheme = {
      bg: 'cornflowerBlue',
      fg: '#322F7C'
    }
      
    return(
      <div className={styles.centering}>
        <Input scheme={scheme}/>
      </div>
    )
  }
```

### See example app

```
git@github.com:cerico/larch-input.git
cd larch-input/example
npm install
npm run dev
```

