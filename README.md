# WTF Opera Mini?!

Features not supported by Opera Mini and some workarounds for them.

Read the Blog Post


## Contribute


### How to Contribute


1. Create a [public github gist](https://gist.github.com/) with your workaround code

2. Get the raw link to the gist file

3. Fork this repository

4. Find the file for the feature your workaround is for

Workaround files are in `workarounds/` folder.
If the file for your workaround does not yet exist, create one. The title of the file should be the same as the path on the website. 

So, for example, for the `CSS position:fixed` feature, the url on the website is `http://wtfoperamini.com/#/css-fixed`, and the file name is `css-fixed.json`.

5. Add your workaround details

```
"[index]": {
	"github_username": "[your-github-username]",
	"github_gist_url": "[raw-github-gist-file-url]"
}
```

For example -

```
"1": {
	"github_username": "Ire",
	"github_gist_url": "https://gist.githubusercontent.com/ireade/c005d8a1f4f693ecc213/raw/4d1ccfc4510b472d95b11ad2adc9454bc29c8d77/test.css"
}
```


6. Submit a pull request for your addition.


### Contributors

- [Ire Aderinokun](http://github.com/ireade)