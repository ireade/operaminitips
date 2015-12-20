# WTF Opera Mini?!


![Stat Counter Browser Statistics for Nigeria](images/Nigeria.png)

According to [StatCounter](http://gs.statcounter.com/#mobile_browser-NG-monthly-201412-201511), **73% of users in Nigeria** use Opera Mini as their browser on mobile. This is a stark difference to the **global percentage of 11%**.

This is a huge problem because Opera Mini today is basically like IE 8. It has terrible support for a lot of development features we take for granted.

[WTF Opera Mini?!](http://wtfoperamini.com) is a list of all the unsupported or partially supported development features, and some crowsourced workarounds for them. 

Although this is directed at Opera Mini, this can be a useful resource for anyone practicing progressive enhancement or graceful degradation.


**[Visit the Website](http://wtfoperamini.com)**


## Contribute

Help contribute to the workarounds!


**Step 1. Create a public [Github Gist](https://gist.github.com/) with your workaround**

Your workaround can be anything. It can be a snippet of code, or a plain text file explaining how you would work around the problem. It will be helpful for you to add a commented out intro to your workaround if it is for a particular situation. 

[See example]()


**Step 2. Fork this repository**

**Step 3. Find the file for the feature your workaround is for**

Workaround files are in `workarounds/` folder.
If the file for your workaround does not yet exist, create one. The title of the file should be the same as the path on the website. 

For example, for the [CSS3 2D Transforms](http://wtfoperamini.com/#/transforms2d) feature, the url on the website is `http://wtfoperamini.com/#/transforms2d`, and the corresponding file name is `transforms2d.json`.


**Step 4. Add your workaround details**

You will need three details

- Your github username
- The URL to the gist
- The link to the raw gist file


For example, in `workarounds/transforms2d.json` -

```
{
	"1": {
		"github_username": "ireade",
		"github_gist_url": "https://gist.github.com/ireade/0320cb5edf0118fba1ba",
		"raw_github_gist_file": "https://gist.githubusercontent.com/ireade/0320cb5edf0118fba1ba/raw/8b5e1ea5de5ae39b382f9bda03f1eb6df89dca7d/2d-transform-workaround-1.css"
	}
	}
```

**Step 5. Add your name to the contributors list.**

In the `README.md` file, add your name (and link if you wish) to the bottom of the list.



**Step 6. Submit a pull request for your addition.**



### Contirbutors

- [Ire Aderinokun](http://github.com/ireade)
