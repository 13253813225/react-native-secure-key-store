# 设置 Codegen 生成目录，指定 generated 目录路径
set(secure_key_store_generated_dir "${CMAKE_CURRENT_SOURCE_DIR}/generated")

# 使用 GLOB_RECURSE 递归地查找所有在 generated 目录下的 .cpp 文件，并将其存储到变量 secure_key_store_generated_SRC 中
file(GLOB_RECURSE secure_key_store_generated_SRC "${secure_key_store_generated_dir}/**/*.cpp")

# 查找当前目录下的所有 .cpp 文件，并将其存储到变量 secure_key_store_SRC 中
# CONFIGURE_DEPENDS 表示如果这些文件被修改，CMake 会重新配置
file(GLOB secure_key_store_SRC CONFIGURE_DEPENDS *.cpp)

# 创建一个共享库 rtn_centered_text，包含两部分：rtn_centered_text_SRC 和 rtn_centered_text_generated_SRC
add_library(secure_key_store SHARED ${secure_key_store_SRC} ${secure_key_store_generated_SRC})

# 为目标库 rtn_centered_text 设置包含路径，这些路径会包含当前源目录和 Codegen 生成文件所在的目录
target_include_directories(secure_key_store PUBLIC ${CMAKE_CURRENT_SOURCE_DIR} ${secure_key_store_generated_dir})

# 将库 secure_key_store 链接到 rnoh sdk，意味着 secure_key_store 使用 rnoh sdk 中的功能
target_link_libraries(secure_key_store PUBLIC rnoh)