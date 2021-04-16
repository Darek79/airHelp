## General

the main fun is in Content.tsx and the helperFn.tsx file. The rest is build around those two.

## Login screen / Sign up screen

-Login screen allows user to switch between has an account and sign up.
-I created an Input Component which i reuse to render the inputs.
-When username is taken an error will appear.
-When username or password has not required length an error message will appear.

## Content

On the left  side you see a empty list at the beginning. When you enter values the list will get filled. The list is saved at the localstorage, the same for the users.

List will always have 10 entries.
I wrapped the clickhandler for the listitems and the submit handler for the form in useCallback.
this will prevent the clickhandler to be regenerated on each render cycle of the list. the list is wrapped in memo. so also here it will be not generated all the time. of course there would a different approach for the state managment possible, however as its my first try with charka ui its ok for me. the history will be set new, when the data props changed.
the items are clickable, i tried to add cursor:pointer for the items, but also here becaus of time i didnt wanted waste to much.

In the middle is the searchbox in which you can enter a searchword. I tried to see if chaining makes sene, for example apple&banana but i always received the result for the first value.

At the right side you will see the API results that the spoonacular API returns.

when you click on the search results a modal will appear asking to rerun the query. as you will see i added timestamps, i had a approach where i checked the time to the last query but i dumped it cause its not user friendly.

i could add connect the user with the input in localstorage to have a seperate history for each user. this should be done but is missing.

## Bonus

as i said its my first app on next js and chakra.
its hard but at the same time easy to create components, because its so easy to add simply the values everywhere instead of creating standalone reusable components. i created some but saw that for exampe a modal is available. however i wanted to show that in my other apps i do this.

the api was not hard, i have not used the staticprops hooks cause here i used the localstorage, however in a real app where we load initial products i would use them of course.





