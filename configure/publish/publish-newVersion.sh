#!/bin/sh
VERSION=$1
HOME=$(pwd)

job_before_echo_basic() {
    printf "\n\tJob before echo basic \n"
    printf "============================================\n"
    printf "Released new version\n"
    printf "============================================\n\n"
}

job_before_checked() {
    printf "\n\tJob before check parameter \n"
    printf "============================================\n"
    if test -z "$VERSION"; then
        printf "Please input version \n"
        exit 1
    else
        printf "Version checked successful         | %s\n" "$VERSION"
    fi
    printf "============================================\n\n"
}

job_switch_to_version_branch() {
    printf "\n\tJob switch to version branch \n"
    printf "============================================\n"

    # 检查分支是否存在
    if git show-ref --verify --quiet "refs/heads/$VERSION"; then
        printf "Branch '%s' exists, switching...\n" "$VERSION"
        git checkout "$VERSION"
    else
        printf "Branch '%s' does not exist, creating...\n" "$VERSION"
        git checkout -b "$VERSION"
    fi

    if [ $? -ne 0 ]; then
        printf "Failed to switch to branch '%s'\n" "$VERSION"
        exit 1
    fi

    printf "Now on branch: %s\n" "$VERSION"
    printf "============================================\n\n"
}

job_check_version_diff() {
    printf "\n\tJob check version difference \n"
    printf "============================================\n"

    # 获取当前根目录版本
    CURRENT_VERSION=$(node -p "require('./package.json').version" 2>/dev/null)

    if [ $? -ne 0 ]; then
        printf "Warning: Cannot read current version from package.json\n"
        printf "============================================\n\n"
        return 0
    fi

    printf "Current version: %s\n" "$CURRENT_VERSION"
    printf "Target version:  %s\n" "$VERSION"

    if [ "$CURRENT_VERSION" = "$VERSION" ]; then
        printf "\nWarning: Target version is the same as current version\n"
        printf "Do you want to continue? (y/n): "
        read -r CONFIRM
        case $CONFIRM in
            [Yy]* )
                printf "Continuing with same version...\n"
                ;;
            * )
                printf "Operation cancelled by user\n"
                exit 0
                ;;
        esac
    else
        printf "Version will be updated from %s to %s\n" "$CURRENT_VERSION" "$VERSION"
    fi

    printf "============================================\n\n"
}

job_runner_apply() {
    printf "\n\tJob runner apply \n"
    printf "============================================\n"

    printf "Apply new version for web ...\n"

    # 使用 --allow-same-version 参数允许相同版本
    npm version "$VERSION" --no-git-tag-version --allow-same-version

    if [ $? -ne 0 ]; then
        printf "\nApply new version for web failed\n\n"
        exit 1
    else
        printf "\nApply new version for web successful\n\n"
    fi
    cd "$HOME"
    printf "============================================\n\n"
}

job_runner_apply_playground() {
    printf "\n\tJob runner apply playground \n"
    printf "============================================\n"

    # 检查 playground 目录是否存在
    if [ ! -d "playground" ]; then
        printf "Playground directory not found, skipping...\n"
        printf "============================================\n\n"
        return 0
    fi

    printf "Apply new version for playground ...\n"
    cd playground

    # 检查 playground 目录下是否有 package.json
    if [ ! -f "package.json" ]; then
        printf "No package.json found in playground directory, skipping...\n"
        cd "$HOME"
        printf "============================================\n\n"
        return 0
    fi

    # 检查 playground 当前版本
    PLAYGROUND_CURRENT_VERSION=$(node -p "require('./package.json').version" 2>/dev/null)
    if [ $? -eq 0 ] && [ "$PLAYGROUND_CURRENT_VERSION" = "$VERSION" ]; then
        printf "Playground version is already %s\n" "$VERSION"
    fi

    # 使用 --allow-same-version 参数允许相同版本
    npm version "$VERSION" --no-git-tag-version --allow-same-version

    if [ $? -ne 0 ]; then
        printf "\nApply new version for playground failed\n\n"
        cd "$HOME"
        exit 1
    else
        printf "\nApply new version for playground successful\n\n"
    fi

    cd "$HOME"
    printf "============================================\n\n"
}

job_before_echo_basic
job_before_checked
job_switch_to_version_branch
job_check_version_diff
job_runner_apply
job_runner_apply_playground