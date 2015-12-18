# WTF Opera Mini?!


![Stat Counter Browser Statistics for Nigeria](images/StatCounter-browser-NG-monthly-201412-201511.png)

According to [StatCounter](http://gs.statcounter.com/#all-browser-NG-monthly-201412-201511), **61.57% of users in Nigeria** use Opera Mini as their browser on mobile. This is a stark difference to the **global percentage of 5.41%**.


This came as a surprise to me. 

Features not supported by Opera Mini and some workarounds for them.




Although this is directed at Opera Mini, this can be a useful resource for anyone practicaing progressive enhancement or graceful degradation.


**[Visit the Website](http://wtfoperamini.com)**


## Contribute

Contribute to workarounds


### How to Contribute


**Step 1. Create a [public github gist](https://gist.github.com/) with your workaround code**

**Step 2. Get the raw link to the gist file**

**Step 3. Fork this repository**

**Step 4. Find the file for the feature your workaround is for**

Workaround files are in `workarounds/` folder.
If the file for your workaround does not yet exist, create one. The title of the file should be the same as the path on the website. 

For example, for the [CSS position:fixed](http://wtfoperamini.com/#/css-fixed) feature, the url on the website is `http://wtfoperamini.com/#/css-fixed`, and the corresponding file name is `css-fixed.json`.

**Step 5. Add your workaround details**

Format - 

```
"[index]": {
	"github_username": "[your-github-username]",
	"github_gist_url": "[raw-github-gist-file-url]"
}
```

For example, in `workarounds/css-fixed.json` -

```
"1": {
	"github_username": "Ire",
	"github_gist_url": "https://gist.githubusercontent.com/ireade/c005d8a1f4f693ecc213/raw/4d1ccfc4510b472d95b11ad2adc9454bc29c8d77/test.css"
}
```

**Step 6. Add your name to the contributors list.**

In the `contributors.md` file, add your name (and link if you wish) to the bottom of the list.



**Step 7. Submit a pull request for your addition.**



