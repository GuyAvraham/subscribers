assian new post:

<form ng-show="$root.currentUser">
    <label>Some content: </label>
    <input ng-model="newPost.content" width="200">

    <tags-input ng-model="newPost.tags" placeHolder="tags of your post">
        <auto-complete source="loadTags()"></auto-complete>
    </tags-input>

    <button ng-click="saveNewPost()">Add</button>
</form>

<br><br>
all posts:
<div ng-repeat="post in allPosts">
    {{post.content}}
    tags: <label ng-repeat="tag in post.tags">  {{ tag.text }}, </label>
</div>