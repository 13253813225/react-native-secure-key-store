#pragma once

#include "generated/RNOH/generated/BaseSecureKeyStorePackage.h"

namespace rnoh {

class RTNSecureKeyStorePackage : public BaseSecureKeyStorePackage {
    using Super = BaseSecureKeyStorePackage;

public:
    RTNSecureKeyStorePackage(Package::Context ctx) : Super(ctx) {}
};

} // 