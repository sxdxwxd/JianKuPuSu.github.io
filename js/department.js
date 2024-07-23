document.addEventListener('DOMContentLoaded', function() {
    const departments = [
        {
            name: "实践外联部",
            description: "进行活动赞助的拉取，保证活动的正常进行。" +
                "为协会讲座联络主讲教师。" +
                "举办数协内部各种大型活动，集前期策划，实施与总结为一体。" +
                "负责协会活动教室的审批。",
            image: "./src/bumen1.png"
        },
        {
            name: "学习竞赛部",
            description: "负责每年数学竞赛，建模大赛等各种数学比赛的组织和培训。" +
                "负责答疑，及时解决同学们的问题，引导同学思考。" +
                "负责竞赛通讯稿的撰写。",
            image: "./src/bumen2.png"
        },
        {
            name: "办公室",
            description: "负责会议组织、信息通知、印章保管、材料编写、公文培训。" +
                "负责社团活动报送审批。" +
                "负责社联财务管理、物资调配、预算审查以及监督社团财务状况。" +
                "负责编排简报，做出总结。",
            image: "./src/bumen3.png"
        },
        {
            name: "新媒体宣传部",
            description: "负责官q和公众号的推送，为协会的招新以及活动的举办做好宣传工作。" +
                "负责协会各种活动现场拍照工作，活动图像记录存档。" +
                "负责协会招新的横幅海报宣传单的制作、印刷和张贴等工作。",
            image: "./src/bumen4.png"
        },
    ];

    const container = document.getElementById('departments');

    departments.forEach(department => {
        const departmentDiv = document.createElement('div');
        departmentDiv.className = 'department mb-3';

        const deptName = document.createElement('h4');
        deptName.textContent = department.name;

        const deptImg = document.createElement('img');
        deptImg.src = department.image;

        departmentDiv.appendChild(deptName);

        const descriptions = department.description.split('。');
        descriptions.forEach(sentence => {
            if (sentence.trim()) {
                const deptDesc = document.createElement('p');
                deptDesc.textContent = sentence + '。';  // 手动加上句号
                departmentDiv.appendChild(deptDesc);
            }
        });

        departmentDiv.appendChild(deptImg);
        container.appendChild(departmentDiv);

        departmentDiv.addEventListener('click', function() {
            const currentlyActive = document.querySelector('.department.active');
            if (currentlyActive && currentlyActive !== departmentDiv) {
                currentlyActive.classList.remove('active');
            }
            departmentDiv.classList.toggle('active');
        });
    });
});
