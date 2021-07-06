$(document).ready(function () {
    $('#searchUser').on('keyup', function (e) {
        let username = e.target.value;

        // Make request to GitHub
        $.ajax({
            url: 'https://api.github.com/users/' + username,
            data: {
          
                client_id: '',
                client_secret: ''

            },
            success: function (user) {
                $('#profile').html(
                    `<div class="card border-primary mb-3" style="max-width: 100rem;">
                    <div class="card-header"><h3>${user.name}</h3></div>
                    <div class="card-body">
                      <div class="row">
                      <div class="col-md-3">
                        <img class="img-thumbnail avatar" src="${user.avatar_url}">
                        <a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">View Profile</a>
                      </div>
                      <div class="col-md-9">
                        <span class="badge badge-dark">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-primary">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-success">Followers: ${user.followers}</span>
                        <span class="badge badge-info">Following: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                          <li class="list-group-item">Company: ${user.company}</li>
                          <li class="list-group-item">Website/blog: <a href="${user.blog}" target="_blank">${user.blog}</a></li>
                          <li class="list-group-item">Location: ${user.location}</li>
                          <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                `
                )
            }
        });
    });
});
