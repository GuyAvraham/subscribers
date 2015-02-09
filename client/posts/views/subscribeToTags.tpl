
<div ng-show="$root.currentUser" >
    please tag jobs to subscribe to

    <tags-input  ng-model="myTags.tags" placeHolder="subscribe to tags" on-tag-added="reloadPosts()" on-tag-removed="reloadPosts()">
        <auto-complete source="loadTags()" ></auto-complete>
    </tags-input>

    <br> <br>
    relevant posts:
    <div ng-repeat="post in allPosts | relevantPosts: myTags ">
        content:  {{post.content}}
        tags:  <label ng-repeat="tag in post.tags">  {{ tag.text }},  </label>
    </div>
    <br> <br>
    all posts:
    <div ng-repeat="post in allPosts">
        {{post.content}}
        tags:  <label ng-repeat="tag in post.tags">  {{ tag.text }},  </label>
    </div>

</div>
